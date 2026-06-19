---
title: How to find out if Linux is on Hard Disk or SSD
description: Imagine the following situation. You need to find out why your
  notebook is running slowly, or even an installation of a cloud database. You
  remember an article you read that showed the difference SSD makes to your
  computer's performance, but how do you find out?
date: 2020-07-10T20:51:17.000Z
lang: en
translationKey: como-descobrir-se-o-linux-esta-em-disco-rigido-ou-ssd
slug: how-to-discover-linux-is-on-hard-disk-or-ssd
category: development
tags: []
wpId: 11900
canonicalPath: /en/development/how-to-discover-linux-is-on-hard-disk-or-ssd/
needsReview: false
updated: 2021-12-12T11:16:58.000Z
---

Imagine the following situation. You need to find out why your notebook is running slowly, or even an installation of a cloud database. You remember an article you read that showed the difference SSD makes to your computer's performance, but how do you find out?

From version **2.6.29** kernel , Linux operating systems can automatically detect the SSD. There are a few ways to find out if the disk is SSD or HDD.

#### Method 1 - Check if the disk is rotational

As you may already know, the traditional **hard disk drive (HDD)** stores the data on a circular disk known as **dish** . When the disk spins, the moving read/write head accesses the data. The faster the disk spins, the faster the hard disk works.

On the other hand, the **Solid State Drive (SDD)** It is a modern storage technology and a faster type of disk that stores data on instantly accessible flash memory chips. Unlike traditional HDDs, SSDs have no moving parts and **SSDs don't spin** .

So if you want to find out if the installed disk is SSD or normal HDD, check if the disk is rotational using the following command:

$ cat /sys/block/sda/queue/rotational

if the output is **1** , the disk is HDD. if the output is **0** (zero), the disk is SDD. Because, the SSDs will not be rotated. Therefore, the output must be zero if you have SSD in your system.

Each drive has a directory in **/ sys / class / block /** location. Therefore, you can also check the details of other units.

$ cat /sys/block/sdb/queue/rotational

#### Method 2 - Using the lsblk Command

The command **lsblk** read the file system **sysfs** it's the **udev db** to gather information about all available or specified block devices. The lsblk command is part of the package **util-linux** and comes pre-installed with most Linux distributions.

If the lsblk command is not available, install the util-linux package using your distribution's package manager.

For example, on Arch based systems, you can install it using the command:

$ sudo pacman -S util-linux

On Debian-based systems:

$ sudo apt install util-linux

On RPM-based systems:

$ sudo yum install util-linux

On openSUSE:

$ sudo zypper install util-linux

Now find out if the disk is SSD or HDD using the command:

$ lsblk -d -o name,route

**Sample output:**

NAME ROUTE
loop0 1
loop1 1
loop2 1
loop3 1
loop4 1
loop5 1
loop6 1
**sda 1** 
Mr 1

Here, "route" means **rotation device** . If you get the route value in the above output as **1** , the disk will be HDD. if the value is **0 (zero)** , the disk will be SSD.

#### Method 3 - Using SMART Monitoring Tools

The other way to find out if the disk is SSD or HDD is using the command **smartctl** . smartctl is part of the SMART monitoring tools package, used to control and monitor SMART enabled ATA and SCSI hard drives.

To install SMART monitoring tools on Arch Linux and its variants, run:

$ sudo pacman -S install smartmontools

On Debian, Ubuntu:

$ sudo apt install smartmontools

On RHEL, CentOS:

$ sudo yum installs smartmontools

On openSUSE:

$ sudo zypper install smartmontools

After installing the smartmontools package, run the following command to find out if the disk is SSD or HDD:

$ sudo smartctl -a / dev / sda | grep 'Rotation rate'

If the disk is SSD, you will get output as below.

Rotation Rate: Solid State Device

If the disk is HDD, you will get this output:

Rotation Rate: 5400 rpm

#### What if there are multiple discs?

What if I have more than one disk? And are both discs the same size and manufacturer? I don't know which disk my Linux is installed on. In that case, just find which disk the root file system is located on using the following command:

$df / -h

**Sample output:**

File System Size Used Available Usage % Mounted on
 **/ dev / sda1** 458G 341G 95G 79% /

Alternatively, use the command **lshw** to find more details about the discs:

$ sudo lshw -short -C disk

**Sample output:**

Path H / W Device Class Description
================================================== == ==================
Disk Multi-Card /0/100/1d/1/1/6/0.0.0 / dev / sdb
/0/100/1d/1/1/6/0.0.0/0 / dev / sdb disk           
**/0/1/0.0.0 / dev / sda disk 500GB ST9500325AS** 
/0/2/0.0.0 / dev / cdrom disk DVD + -RW DS-8A8SH

As you see in the output above, my root file system is installed on **/ dev / sda** . Now follow any of the above methods to find out if the disk is HDD or SSD.

**note:**

On some new laptops like the **Lenovo ideapad s240** , you will see a different device name, for example, **nvme0n1** . Let's see the list of available block devices using the command:

$ls /sys/block

**Sample output:**

loop0 loop11 loop14 loop17 loop2 loop3 loop6 loop9
loop1 loop12 loop15 loop18 loop20 loop4 loop7 **nvme0n1** 
loop10 loop13 loop16 loop19 loop21 loop5 loop8

Let's find out which disk the root file system is located on:

$df / -h

**Sample output:**

File System Size Used Available Usage % Mounted on
 **/ dev / nvme0n1p6** 96G 34G 58G 34% /

As you can see in the outputs above, there is no **sda** or **sdb** . Do not panic! This is normal. The device name **/ dev / nvme** … indicates the most recent “disks” of the **NVMe** .

Here, **/ dev / nvme0n1** it's equivalent to **/ dev / sda** . Therefore, **/ dev / nvme0n1p6** it's equivalent to **/ dev / sda6** .

**Reference:**  
[https://www.ostechnix.com/how-to-find-if-the-disk-is-ssd-or-hdd-in-linux/](https://www.ostechnix.com/how-to-find-if-the-disk-is-ssd-or-hdd-in-linux/)
