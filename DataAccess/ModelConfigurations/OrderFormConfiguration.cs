using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.ModelConfigurations;

public class OrderFormConfiguration : IEntityTypeConfiguration<OrderForm>
{
    public void Configure(EntityTypeBuilder<OrderForm> builder)
    {
        builder.HasKey(form => form.Id);
        builder
            .Property(id => id.Id)
            .ValueGeneratedOnAdd();
    }
}