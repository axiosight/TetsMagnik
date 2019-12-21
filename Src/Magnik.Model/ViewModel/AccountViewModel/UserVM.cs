using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Model.ViewModel.AccountViewModel
{
    public class UserVM
    {
        public string UserId { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Surame { get; set; }
        public string Mobile { get; set; }
        public string Street { get; set; }
        public string ZIP { get; set; }
        public string Desciption { get; set; }
        public IEnumerable<string> Roles { get; set; }
    }
}
