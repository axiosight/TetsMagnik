using System;
using System.Collections.Generic;
using System.Text;
using Magnik.Model.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Magnik.Model.Context
{
    public interface IDatabaseContext : IDisposable
    {
        DbSet<Account> Accounts { get; set; }

        DbSet<Pet> Pets { get; set; }

        DbSet<PetInfo> PetInfos { get; set; }

        DbSet<TypePet> Types { get; set; }

        DbSet<Breed> Breeds { get; set; }

        DbSet<ServiceOfSitter> ServiceOfSitters { get; set; }

        DbSet<Order> Orders { get; set; }

        DbSet<Comment> Comments { get; set; }

        EntityEntry Entry(object item);

        int SaveChanges();
    }
}
