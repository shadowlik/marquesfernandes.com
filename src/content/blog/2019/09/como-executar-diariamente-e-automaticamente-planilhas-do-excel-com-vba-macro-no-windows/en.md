---
title: How to Automatically Run Excel Spreadsheets with VBA Macro on Windows
description: "Have you ever needed to run an Excel spreadsheet on a daily basis?
  I recently came across this scenario, and as a lazy programmer I thought: You
  can't not automate this! I found a relatively simple solution and decided to
  document it."
date: 2019-09-25T17:35:18.000Z
lang: en
translationKey: como-executar-diariamente-e-automaticamente-planilhas-do-excel-com-vba-macro-no-windows
slug: how-to-run-daily-and-automatically-excel-worksheets-with-vba-macro-in-windows
category: development
tags: []
wpId: 12073
canonicalPath: /en/development/how-to-run-daily-and-automatically-excel-worksheets-with-vba-macro-in-windows/
needsReview: false
updated: 2021-12-12T11:14:46.000Z
---

Have you ever needed to run an Excel spreadsheet daily? I recently came across this scenario, and as a lazy programmer I thought: You can't not automate this! I found a relatively simple solution and decided to document it.

> **I always choose a lazy person  
> to do a difficult job... Because she will find an easy way to do it.**
> 
> bill Gates

I'll explain how you can do this using the **Task Scheduler** **(Windows Task Scheduler - already installed)** to open; Run VBA Macros; To save; Close Excel. This solution allows for a wide variety of scheduling settings!

**FOR THE SCHEDULER TO RUN THE COMPUTER MUST BE TURNED ON**

## prerequisites

All prerequisites are already installed by default on Windows:

-   Task Scheduler
-   Notepad (Or some neutral text editor)
-   CScript **(C:WindowsSystem32cscript.exe)**

## Creating the VBS file

The file that will make all the magic happen will be a VBS (Visual Basic Script) script. If you are familiar with VBA you will have no difficulty understanding the script commands.

open the *Notepad* and copy the content below:

'Full path to excel spreadsheet 
ExcelFilePath = "C:UsershenriqueDocumentsworksheet\_name.xlsm" 
 
'Scope and full name of the macro to run 
MacroPath = "Module1.MacroName" 

'We create an instance of excel 
Set ExcelApp = CreateObject("Excel.Application") 

'Do you want this instance to be visible? 
ExcelApp.Visible = True 'or "False" 

'Prevent Excel from showing alerts
ExcelApp.DisplayAlerts = False 

'We open the excel file 
Set wb = ExcelApp.Workbooks.Open(ExcelFilePath) 

'We run the macro 
ExcelApp.Run MacroPath

'We save the excel file after executing the macro 
wb.Save 

'We came back with the alerts parameter to avoid problems with other spreadsheets 
ExcelApp.DisplayAlerts = True 
 
'We closed the Excel file 
wb.Close 

'We closed the Excel instance 
ExcelApp.Quit 
  
'Alert to notify when spreadsheet runs successfully 
MsgBox "Your spreadsheet automatically ran successfully at:" & TimeValue(Now), vbInformation 

Now we need to replace some information:

1.  Change the variable value **ExcelFilePath** to the exact location of the Excel file you want to open. It is important to enter both the correct name and the extension.
2.  Change the variable value **Macropath** to the exact value of the macro you want to run.
3.  In **ExcelApp.Visible** you can decide if you want the application to open an instance visible **(true)** or that it runs in the background **(false).** **Some** **add-ins do not work in the background.**
4.  **msgbox** : Alert with visible message to the user if the macro has run successfully, if you don't want to, just remove this line.

Let's save this file with the extension **.vbs** : In Notepad when saving in the filename field type something like: **excelautomatico.vbs** and in file type select: **All files** . Good thing all the paths are correct and save this file somewhere safe where no one can accidentally remove it. Make a note of the saved file path as we will need it later!

[![](./2019-09-image.jpg)](./2019-09-image.jpg)

## Creating the schedule with Task Scheduler

To find the program just type in the start menu search **scheduler task** . 

[![](./2019-09-image-1.jpg)](./2019-09-image-1.jpg)

To create a new task just click on the button on the right side: **Create Task...**

[![screenshot-marquesfernandes.com-2019.09.24-16\_39\_54.png](https://trello-attachments.s3.amazonaws.com/561604bf662a944db46d79d2/5d8a68c16ff6e127a13d7129/ca63bcb61328d843bcc4d5199d845ee6/screenshot-marquesfernandes.com-2019.09.24-16_39_54.png)](https://trello-attachments.s3.amazonaws.com/561604bf662a944db46d79d2/5d8a68c16ff6e127a13d7129/ca63bcb61328d843bcc4d5199d845ee6/screenshot-marquesfernandes.com-2019.09.24-16_39_54.png)

### Create task - General tab 

[![screenshot-marquesfernandes.com-2019.09.24-16\_41\_55.png](https://trello-attachments.s3.amazonaws.com/561604bf662a944db46d79d2/5d8a68c16ff6e127a13d7129/ec8ed4c4d718fadfac9c908f76d213dc/screenshot-marquesfernandes.com-2019.09.24-16_41_55.png)](https://trello-attachments.s3.amazonaws.com/561604bf662a944db46d79d2/5d8a68c16ff6e127a13d7129/ec8ed4c4d718fadfac9c908f76d213dc/screenshot-marquesfernandes.com-2019.09.24-16_41_55.png)

At **General tab** you will fill in the name of the appointment and its description.

*Tip: The description is optional but a good practice so that in the future you or someone else can understand what the hell this schedule does. Own experience, create an objective description!*

On this tab we can also define whether we want the schedule to run when the user is not logged in to the computer, **remembering again that to work the computer always needs to be turned on** . I'll assume you want to always run even with your computer locked: Select **Run whether the user is logged in or not** and enter your username and password to validate this option. 

### Create Task - Triggers Tab 

At **Triggers tab** we configure the task schedules, click the button **New** to create and configure a new schedule. In the example below, we are creating a rule to run our schedule every day at 4:43 pm:

[![screenshot-marquesfernandes.com-2019.09.24-16\_44\_36.png](https://trello-attachments.s3.amazonaws.com/5d8a68c16ff6e127a13d7129/617x512/a9aae6c23cf29987b1719a0b8fa745bf/screenshot-marquesfernandes.com-2019.09.24-16_44_36.png)](https://trello-attachments.s3.amazonaws.com/5d8a68c16ff6e127a13d7129/617x512/a9aae6c23cf29987b1719a0b8fa745bf/screenshot-marquesfernandes.com-2019.09.24-16_44_36.png)

You can create more than one rule for each schedule.

### Create task - Actions tab 

At **Actions tab** let's map out what actions should be performed. To run the script created at the beginning of the tutorial we need to use a native Windows program called **CScript** which allows us to run our file **.vbs** : 

In the "Program/script" field add: **"C:WindowsSystem32cscript.exe"** 

Now let's pass as an argument for the **CScript** which file we want it to run. Paste the full path of the file **.vbs** that we created in the beginning: 

In the "Add arguments (optional)" field, change the values and add something like: **"Ç:** **Users** **Henrique** **excelautomatic** **.vbs"** 

**Both settings must be enclosed in quotes.** 

[![screenshot-marquesfernandes.com-2019.09.24-16\_46\_38.png](https://trello-attachments.s3.amazonaws.com/5d8a68c16ff6e127a13d7129/444x496/54ca5124a4c8a2022389264752fab181/screenshot-marquesfernandes.com-2019.09.24-16_46_38.png)](https://trello-attachments.s3.amazonaws.com/5d8a68c16ff6e127a13d7129/444x496/54ca5124a4c8a2022389264752fab181/screenshot-marquesfernandes.com-2019.09.24-16_46_38.png)

### Create Task - Other Tabs 

Some additional settings can be found on the other tabs, so I recommend you to check it out and see if any other settings are needed for your case.
