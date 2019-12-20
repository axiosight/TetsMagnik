using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Model.ViewModel.AccountViewModel
{
    public class AuthentificationResult
    {
        public bool Success { get; set; }
        public IEnumerable<string> Errors { get; set; }
        public string Code { get; set; }
    }
}
