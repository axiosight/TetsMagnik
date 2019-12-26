using Magnik.Model.Entities;
using System.Collections.Generic;

namespace Magnik.DataProvider.Interfaces
{
    public interface IPetRepository : IRepository<Pet>
    {
        IEnumerable<Pet> GetPetsOfAccount(string accountId);
        bool DeleteById(int Id);
    }
}