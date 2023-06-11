using Application.Dtos;

namespace Backend.Application.Services;

public interface IOrderFormService
{
    Task<OrderFormDto> CreateNew(string senderAddress, string senderCity, string receiverAddress, string receiverCity, double cargoWeight, DateTime pickupCargoDate, CancellationToken cancellationToken);
    Task<IEnumerable<OrderFormDto>> GetAll(CancellationToken cancellationToken);
}