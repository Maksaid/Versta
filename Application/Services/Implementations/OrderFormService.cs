using Application.Dtos;
using Application.Mapping;
using DataAccess.Data;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Application.Services.Implementations;

public class OrderFormService : IOrderFormService
{
    private readonly DatabaseContext _context;

    public OrderFormService(DatabaseContext context)
    {
        _context = context;
    }

    public async Task<OrderFormDto> CreateNew(string senderAddress, string senderCity, string receiverAddress, string receiverCity, double cargoWeight, DateTime pickupCargoDate, CancellationToken cancellationToken)
    {
        var orderForm = new OrderForm(
            senderAddress, 
            senderCity, 
            receiverAddress, 
            receiverCity, 
            cargoWeight,
            pickupCargoDate);

        _context.OrderForms.Add(orderForm);
        await _context.SaveChangesAsync(cancellationToken);
        return orderForm.AsDto();
    }

    public async Task<IEnumerable<OrderFormDto>> GetAll(CancellationToken cancellationToken)
    {
        List<OrderForm> orderForms = await _context.OrderForms.ToListAsync(cancellationToken);
        return orderForms.Select(orderForm => orderForm.AsDto());
    }
}