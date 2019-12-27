using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Model.ViewModel.CommentViewModel
{
    public class CommentVM
    {
        public string Title { get; set; }
        public string Message { get; set; }
        public string Email { get; set; }
        public string AccountId { get; set; }
        public DateTime CommentTime { get; set; }
    }
}
