using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using PCPApi.Repositories;

namespace PCPApi.Controllers;

[Route("[controller]")]
[ApiController]
public class GeneralConfigController : ControllerBase
{
    private readonly IRepository<GeneralConfig> _repository;
    
    public GeneralConfigController(IRepository<GeneralConfig> repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<GeneralConfig>> Get()
    {
        var generalConfig = _repository.GetAll();
        if (generalConfig is null)
            return NoContent();
        
        return Ok(generalConfig);
    }
    
    [HttpGet("{id:int}")]
    public ActionResult<GeneralConfig> Get(int id)
    {
        var generalConfig = _repository.Get(c => c.CompanyId == id);
        if (generalConfig is null) 
            return NotFound();
        
        return Ok(generalConfig);
    }
    
    [HttpPost]
    public ActionResult Post(GeneralConfig generalConfig)
    {
        try
        {
            if (generalConfig is null)
                return BadRequest();
        
            _repository.Create(generalConfig);
        
            return Created();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
        
    }
    
}