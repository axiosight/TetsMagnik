using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Magnik.Model.Entities
{
    [Table("ServiceOfSitter")]
    public class ServiceOfSitter
    {
        [Key]
        public int ID_ServiceOfSitter { get; set; }

        public string TitleService { get; set; }

        public string Description { get; set; }

        public double PriceService { get; set; }

        [ForeignKey("AccountId")]
        public string AccountId { get; set; }
        public virtual Account Account { get; set; }

        [ForeignKey("OrderId")]
        public int OrderId { get; set; }
        public virtual Order Order { get; set; }
    }
}