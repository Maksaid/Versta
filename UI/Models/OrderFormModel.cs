namespace Versta.Models;

public record OrderFormModel(string SenderAddress, string SenderCity, string ReceiverAddress, string ReceiverCity, double CargoWeight, DateTime PickupCargoDate);