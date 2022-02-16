function Test2()
{
  //Runs the "Orders" tested application.
  TestedApps.Orders.Run();
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(59, 8);
  //Enters the text 'john' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("john");
  //Clicks the 'Street' object.
  Aliases.Orders.OrderForm.Group.Street.Click(49, 3);
  //Enters the text 'dss' in the 'Street' text editor.
  Aliases.Orders.OrderForm.Group.Street.SetText("dss");
  //Clicks the 'MasterCard' button.
  Aliases.Orders.OrderForm.Group.MasterCard.ClickButton();
  //Clicks the 'City' object.
  Aliases.Orders.OrderForm.Group.City.Click(32, 13);
  //Enters the text 's' in the 'City' text editor.
  Aliases.Orders.OrderForm.Group.City.SetText("s");
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //Closes the 'MainForm' window.
  Aliases.Orders.MainForm.Close();
  //Clicks the 'btnNo' button.
  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
}