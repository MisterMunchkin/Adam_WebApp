using Adam_WebApp.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Adam_WebApp.Controllers
{
    [Route("api/[controller]")]
    public class Profile : Controller
    {
        [HttpGet("[action]")]
        public ProfileViewModel GetProfile(string userName)
        {
            ProfileViewModel profile = new ProfileViewModel()
            {
                Id = 1,
                UserName = userName,
                EmailAddress = "dalmiet@gmail.com"
            };

            return profile;
        }
    }
}