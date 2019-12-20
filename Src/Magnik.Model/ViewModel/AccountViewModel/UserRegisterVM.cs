using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Magnik.Model.ViewModel.AccountViewModel
{
    public class UserRegisterVM
    {
        [Required(ErrorMessage = "Bad Email")]
        [StringLength(100)]
        public string Email { get; set; }

        [Required(ErrorMessage = "Bad Name")]
        [MinLength(2)]
        [StringLength(60)]
        public string Name { get; set; }

        [Required(ErrorMessage = "Bad Surname")]
        [MinLength(2)]
        [StringLength(60)]
        public string Surname { get; set; }

        [Required(ErrorMessage = "Bad Mobile")]
        [MinLength(6)]
        [StringLength(100)]
        public string Mobile { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [Compare("Password", ErrorMessage = "Password do not much")]
        [DataType(DataType.Password)]
        public string PasswordConfirm { get; set; }
    }
}