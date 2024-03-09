using Microsoft.AspNetCore.Mvc;
using PCPApi.Entities;
using PCPApi.Repositories;

namespace PCPApi.Controllers;

[Route("[controller]")]
[ApiController]
public class TesteController : ControllerBase
{
    private readonly IRepository<Budget> _repository;
    
    public TesteController(IRepository<Budget> repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Budget>> Get()
    {
        var budget = _repository.GetAll();
        return Ok(budget);
    }
}