using Microsoft.EntityFrameworkCore;
using PCPApi.Entities;

namespace PCPApi.Infra;

public class ApiDbContext : DbContext
{
    public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) {}
    
    public DbSet<Budget>? Budgets { get; set; }
    public DbSet<BudgetAddress>? BudgetAddresses { get; set; }
    public DbSet<BudgetConfig>? BudgetConfigs { get; set; }
    public DbSet<BudgetItem>? BudgetItems { get; set; }
    public DbSet<Commodity>? Commodities { get; set; }
    public DbSet<Company>? Companies { get; set; }
    public DbSet<GeneralConfig>? GeneralConfigs { get; set; }
    public DbSet<Goal>? Goals { get; set; }
    public DbSet<Pricing>? Pricings { get; set; }
    public DbSet<Product>? Products { get; set; }
    public DbSet<Unit>? Units { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<VisualConfig> VisualConfigs { get; set; }
    
}