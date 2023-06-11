namespace DataAccess.Models;

public class OrderForm
{
    public OrderForm(string senderAddress, string senderCity, string receiverAddress, string receiverCity, double cargoWeight, DateTime pickupCargoDate)
    {
        SenderAddress = senderAddress;
        SenderCity = senderCity;
        ReceiverAddress = receiverAddress;
        ReceiverCity = receiverCity;
        CargoWeight = cargoWeight;
        PickupCargoDate = pickupCargoDate;
    }

    protected OrderForm() { }

    public int Id { get; init; }
    public string SenderAddress { get; init; }
    public string SenderCity { get; init; }
    public string ReceiverAddress { get; init; } 
    public string ReceiverCity { get; init; }
    public double CargoWeight { get; init; }
    public DateTime PickupCargoDate { get; init; }
}