using Magnik.Model.Entities;
using Magnik.Model.ViewModel;
using Magnik.Model.ViewModel.OrderViewModel;
using System.Collections.Generic;

namespace Magnik.Logic.Interfaces
{
    public interface IOrderService
    {
        ResponseVM CreateOrder(OrderVM model, string email);
        IEnumerable<Order> GetOrdersOfAccount(string email);
        bool DeleteOrderById(int petId);
    }
}