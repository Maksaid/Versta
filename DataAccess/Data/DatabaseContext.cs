using DataAccess.ModelConfigurations;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Data;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) 
        : base(options)
    {
        Database.EnsureCreated();
    }

    public DbSet<OrderForm> OrderForms { get; private set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new OrderFormConfiguration());
    }
}