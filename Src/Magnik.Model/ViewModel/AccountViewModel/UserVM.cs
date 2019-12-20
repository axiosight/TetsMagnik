using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Model.ViewModel.AccountViewModel
{
    public class UserVM
    {
        public string UserId { get; set; }
        public string Email { get; set; }
        public IEnumerable<string> Roles { get; set; }
    }
}
