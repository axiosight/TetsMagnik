using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Model.Entities
{
    public class ServiceOfSitter
    {
        public int ID_ServiceOfSitter { get; set; }

        public string TitleService { get; set; }

        public string Description { get; set; }

        public double PriceService { get; set; }

        public string AccountID { get; set; }
        public Account Account { get; set; }

        public int OrderID { get; set; }
        public Order Order { get; set; }
    }
}