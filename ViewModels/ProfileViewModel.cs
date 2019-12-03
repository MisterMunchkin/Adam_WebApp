using System.ComponentModel.DataAnnotations;

namespace Adam_WebApp.ViewModels
{
    public class ProfileViewModel
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "User name must not exceed 50 characters")]
        public string UserName { get; set; }

        [Required]
        public string EmailAddress { get; set; }
    }
}