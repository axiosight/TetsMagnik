using Magnik.Model.Entities;
using System.Collections.Generic;

namespace Magnik.DataProvider.Interfaces
{
    public interface IOrderRepository : IRepository<Order>
    {
        IEnumerable<Order> GetOrdersOfAccount(string id);
        bool DeleteById(int Id);
    }
}