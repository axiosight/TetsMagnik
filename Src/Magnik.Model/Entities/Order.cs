using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Magnik.Model.Entities
{
    [Table("Order")]
    public class Order
    {
        [Key]
        public int ID_Order { get; set; }

        public string OrderUserName { get; set; }

        public DateTime OrderTimeNow { get; set; }

        public DateTime StartDateTime { get; set; }

        public DateTime EndDateTime { get; set; }

        [ForeignKey("AccountId")]
        public string AccountId { get; set; }
        public virtual Account Account { get; set; }

        public virtual ServiceOfSitter ServiceOfSitter { get; set; }
    }
}
