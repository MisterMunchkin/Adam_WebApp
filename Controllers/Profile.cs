using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Adam_WebApp.Models;

namespace Adam_WebApp.Controllers
{
    [Route("api/[controller]")]
    public class Profile : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Adam_WebApp>
    }
}
