---
title: Understanding How NodeJS Manages Memory - Garbage Collector
description: Memory management consists of ways to dynamically allocate memory
  when requested and free when that memory is no longer needed - thus freeing up
  space for that memory to be reused.
date: 2020-03-22T22:27:39.000Z
lang: en
translationKey: entendendo-como-o-nodejs-gerencia-a-memoria-garbage-collector
slug: understanding-how-nodejs-manages-memory-garbage-collector
category: technology
tags: []
wpId: 11959
canonicalPath: /en/technology/understanding-how-nodejs-manages-memory-garbage-collector/
needsReview: false
updated: 2021-12-12T11:15:56.000Z
---

As we develop more complex applications, the need to understand how our language works behind the scenes in certain aspects becomes necessary. THE [NodeJS](http://marquesfernandes.com/afinal-o-que-e-nodejs/) , more specifically the v8 engine which is the engine that runs our applications has some limitations, I won't go into detail on all of them, we'll just focus on one: O *memory limit* . By default the maximum allocated memory limit is around 700mb and 1400mb, for 32-bit and 64-bit systems respectively, and this can become a bottleneck for some applications, so it is important to understand how this memory is allocated and deallocated.

## memory management

Memory management consists of ways to dynamically allocate memory when requested and free when that memory is no longer needed - thus freeing up space for that memory to be reused.

There are two ways to manage memory:

-   **Manual:** It consists of delegating this responsibility to the development itself, he is responsible for allocating and deallocating memory in the development of your application.
-   **Automatic:** It consists of using a native "program", usually called *Garbage Collector* (Garbage Collector), which takes care of doing this whole process and trying as hard as possible to avoid memory leaks.

## Garbage Collector - Garbage Collector

The concept of "garbage collection" is a way to manage application memory automatically. The job of the Garbage Collector (GC - Garbage Collector) is to recover the memory occupied by unused objects (garbage). It was designed and used for the first time in the [LISP](https://pt.wikipedia.org/wiki/Lisp) in 1959, invented by John McCarthy.

The way the GC knows that objects are no longer in use is that no other objects have references to them.

### Memory Before Collector Works

Analyzing the diagram below, it will give a view of what memory looks like when objects are referenced in it (they are "alive") and when they are no longer referenced (they are "junk").

![](/wp-content/uploads/2020/03/nodememoria.jpg)

### Memory After Collector Works

After the collector works, the unreachable memories are deleted, freeing up memory space.

![](/wp-content/uploads/2020/03/nodememoriav2.jpg)

The length of time the collector runs varies by application, it maintains a smart methodology to know how often it needs to clear memory. he has a

### Advantages of the Garbage Collector

-   Avoid lost and pending reference errors.
-   It will not try to free up space that was already freed up, saving processing.
-   It will prevent some types of memory leaks.

Obviously, using a garbage collector doesn't solve all problems and isn't a magic bullet for memory management. Some things we need to keep in mind is that you still have to worry about memory leaks, if your code grows memory usage exponentially without reason, this is a sign of a leak that can lead to your slow down and even crash. application. Another point to consider is that its automatic operation may not meet the expectations of all applications, adjustments may be necessary.

## Understanding the "Heap"

The heap is the memory structure used by NodeJS to store objects, texts and closures. This is where all the magic happens.

But the heap goes far beyond that: a running NodeJS process stores all of its memory inside a resident pool. You can think of this as a big box that contains a few more boxes.

The resident set also contains the actual Javascript code (the one running inside the code segment) and the stack, where all the variables reside.

## How does V8 organize the stack?

NodeJS's V8 engine splits the heap into several different spaces for effective memory management:

-   **New space:** most objects are allocated here. The new space is small and designed to be collected quickly.
-   **Old Pointer Space:** contains most objects that can have pointers to other objects. Most objects are moved here after surviving in the new space after a certain amount of time.
-   **Old data space:** contains objects that contain only dead data (no pointers to other objects). Strings, numbers and matrices are moved here after surviving in a new space for a while.
-   **Large object space:** contains objects that are larger than the size limits of other spaces. Each object gets its own mmap memory region. Large objects are never moved by the garbage collector.
-   AND **space** **in** **Code:** code objects, which contain JIT instructions, are allocated here. This is the only executable memory space (your code is here)
-   **Cell space, property cell space, and map space:** Contains Cells, PropertyCells and Maps respectively. Each space contains objects that are the same size and are constrained by pointers, which simplifies the collection.

## More detailed operation

Basically, the garbage collector has two modes of operation.

### Short Collection - Short GC

As we saw earlier, V8 splits the heap into two generations. Objects are allocated in the new space, which is quite small (between 1 and 8 MB). Allocation in new space is very cheap: we only have an allocation pointer that we increment whenever we want to reserve space for a new object. When the allocation pointer reaches the end of the new space, a scavenging (smaller garbage collection cycle) is triggered, which quickly removes any dead objects from the new space.

### Full Collection - Full GC

Objects that have survived two cycles of small garbage collections are promoted to "old space". Old space is garbage collected in the full GC (main garbage collection cycle), which is much less frequent. A full GC cycle is triggered when a certain amount of memory in old space is reached.

To collect old space, which can contain several hundred megabytes of data, we use two closely related algorithms, [mark-sweep](https://www.geeksforgeeks.org/mark-and-sweep-garbage-collection-algorithm/) and [mark-compact](https://en.wikipedia.org/wiki/Mark-compact_algorithm) .

## Forcing the Garbage Collector

Although the NodeJS garbage collector has been improved a lot lately, it might make sense for you to force garbage collection in some cases. But remember, there is every processing cost for this.

Running in normal mode this is not possible, Node does not allow us to allocate or deallocate memories or access the garbage collector, if we want to have access to the function that calls the collector, we need to run our application with the following option:

$ node --expose-gc index.js

When starting your program with this option, you will have access to the function:

global.gc();

To make it more secure, you can use:

function forceGC()
   if (global.gc) {
      global.gc();
   } else {
      console.warn('GC not enabled! Run your program with \`node --expose-gc index.js\`.');
   }
}
