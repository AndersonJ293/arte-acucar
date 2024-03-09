using Microsoft.EntityFrameworkCore;
using PCPApi.Infra;
using PCPApi.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var pgSqlConnection = builder.Configuration.GetConnectionString("DefaultConnection");
    
builder.Services.AddDbContext<ApiDbContext>(options =>
    options.UseNpgsql(pgSqlConnection));

builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
