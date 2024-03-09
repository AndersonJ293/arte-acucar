using Microsoft.EntityFrameworkCore;

namespace PCPApi.Infra;

public class ApiDbContext : DbContext
{
    public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) {}
}