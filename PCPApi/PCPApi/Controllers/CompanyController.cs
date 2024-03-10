using Microsoft.AspNetCore.Mvc;
using PCPApi.Entities;
using PCPApi.Repositories;

namespace PCPApi.Controllers;

[Route("[controller]")]
[ApiController]
public class CompanyController : ControllerBase
{
    private readonly IRepository<Company> _repository;
    
    public CompanyController(IRepository<Company> repository)
    {
        _repository = repository;
    }
    
    [HttpGet]
    public ActionResult<IEnumerable<Company>> Get()
    {
        var company = _repository.GetAll();
        if (company is null)
            return NoContent();
        
        return Ok(company);
    }
    
    [HttpGet("{id:int}")]
    public ActionResult<Company> Get(int id)
    {
        var company = _repository.Get(c => c.CompanyId == id);
        if (company is null) 
            return NoContent();
        
        return Ok(company);
    }
    
    [HttpPost]
    public ActionResult Post(Company company)
    {
        if (company is null)
            return BadRequest();
        
        _repository.Create(company);
        
        return Created();
    }
    
}