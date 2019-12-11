using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace Magnik.Model.Entities
{
    public class Account : IdentityUser
    {
        public byte[] UserImg { get; set; }

        public string UName { get; set; }

        public string USurname { get; set; }

        public string Street { get; set; }

        public string ZIP { get; set; }

        public string Description { get; set; }

        public ICollection<Pet> Pets { get; set; }

        public ICollection<ServiceOfSitter> ServiceOfSitters { get; set; }

        public ICollection<Order> Orders { get; set; }

        public ICollection<Comment> Comments { get; set; }
    }
}