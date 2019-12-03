using System.ComponentModel.DataAnnotations;

namespace Adam_WebApp.Models
{
    public class ProfileViewModel
    {
        [Required]
        [StringLength(50, ErrorMessage = "User name must not exceed 50 characters")]
        public string userName { get; set; }

        [Required]
        public string emailAddress { get; set; }
    }
}