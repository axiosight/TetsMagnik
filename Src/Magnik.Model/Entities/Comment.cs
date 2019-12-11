using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Magnik.Model.Entities
{
    [Table("Comment")]
    public class Comment
    {
        [Key]
        public int ID_Comment { get; set; }

        public string AccounEmail { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public DateTime CommentTime { get; set; }

        [ForeignKey("AccountId")]
        public string AccountId { get; set; }
        public Account Account { get; set; }
    }
}