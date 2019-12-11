using Magnik.Model.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Model.Context
{
    public class DatabaseContext : IdentityDbContext<Account>, IDatabaseContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Account> Accounts { get; set; }

        public DbSet<Pet> Pets { get; set; }

        public DbSet<PetInfo> PetInfos { get; set; }

        public DbSet<TypePet> Types { get; set; }

        public DbSet<Breed> Breeds { get; set; }

        public DbSet<ServiceOfSitter> ServiceOfSitters { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Comment> Comments { get; set; }
    }
}
