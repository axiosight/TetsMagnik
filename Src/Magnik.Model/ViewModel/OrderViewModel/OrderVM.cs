using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Model.ViewModel.OrderViewModel
{
    public class OrderVM
    {
        public string OrderUserName { get; set; }

        public DateTime OrderTimeNow { get; set; }

        public DateTime StartDateTime { get; set; }

        public DateTime EndDateTime { get; set; }

        public string AccountId { get; set; }

        public string ServiceName { get; set; }
    }
}
