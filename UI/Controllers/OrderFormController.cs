using Application.Dtos;
using Backend.Application.Services;
using Microsoft.AspNetCore.Mvc;
using Versta.Models;

namespace Versta.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrderFormController : Controller
{
    private readonly IOrderFormService _formService;

    public OrderFormController(IOrderFormService formService)
    {
        _formService = formService;
    }

    public CancellationToken CancellationToken => HttpContext.RequestAborted;

    [HttpPost("create")]
    public async Task<ActionResult<OrderFormDto>> CreateNew([FromBody] OrderFormModel model)
    { 
        OrderFormDto orderForm = await _formService.CreateNew(model.SenderAddress, model.SenderCity, model.ReceiverAddress, model.ReceiverCity,
            model.CargoWeight, model.PickupCargoDate, CancellationToken);
        return Ok(orderForm);
    }

    [HttpGet("get-all")]
    public async Task<ActionResult<OrderFormDto>> GetAll()
    {
        var orderForms = await _formService.GetAll(CancellationToken);
        return Ok(orderForms);
    }
}