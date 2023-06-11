namespace Application.Dtos;

public record OrderFormDto(int Id, string SenderAddress, string SenderCity, string ReceiverAddress, string ReceiverCity, double CargoWeight, DateTime PickupCargoDate);