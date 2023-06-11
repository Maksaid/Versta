using Application.Dtos;
using DataAccess.Models;

namespace Application.Mapping;

public static class Mapping
{
    public static OrderFormDto AsDto(this OrderForm orderForm) =>
        new OrderFormDto(
            orderForm.Id,
            orderForm.SenderAddress,
            orderForm.SenderCity,
            orderForm.ReceiverAddress,
            orderForm.ReceiverCity,
            orderForm.CargoWeight,
            orderForm.PickupCargoDate);
}