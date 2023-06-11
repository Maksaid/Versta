using Backend.Application.Services;
using Backend.Application.Services.Implementations;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Extensions;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddApplication(this IServiceCollection collection)
    {
        collection.AddScoped<IOrderFormService, OrderFormService>();

        return collection;
    }
}