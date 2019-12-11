using Magnik.DataProvider.Interfaces;
using Magnik.Logic.Interfaces;
using Magnik.Model.Context.CommitProvider;

namespace Magnik.Logic.Services
{
    public class OrderService : IOrderService
    {
        private readonly ICommitProvider _commitProvider;
        private readonly IOrderRepository _orderRepository;

        public OrderService(ICommitProvider commitProvider, IOrderRepository orderRepository)
        {
            _commitProvider = commitProvider;
            _orderRepository = orderRepository;
        }
    }
}