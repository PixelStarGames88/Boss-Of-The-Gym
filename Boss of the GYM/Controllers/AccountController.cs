using Boss_of_the_GYM.Pages;
using Microsoft.AspNetCore.Mvc;

namespace Boss_of_the_GYM.Controllers;
public class AccountController : Controller
{
    public IActionResult Register() => View();

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult Register(RegisterModel registerViewModel)
    {
        return RedirectToAction("Index", "Home");
    }
}