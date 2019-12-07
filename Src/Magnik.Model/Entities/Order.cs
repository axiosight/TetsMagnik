using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Model.Entities
{
    public class Order
    {
        public int ID_Order { get; set; }

        public string OrderUserName { get; set; }

        public DateTime OrderTimeNow { get; set; }

        public DateTime StartDateTime { get; set; }

        public DateTime EndDateTime { get; set; }

        public string AccountId { get; set; }

        public Account Account { get; set; }

        public ServiceOfSitter ServiceOfSitter { get; set; }
    }
}
