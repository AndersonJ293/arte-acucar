using Microsoft.AspNetCore.Mvc;
using PCPApi.Entities;
using PCPApi.Repositories;

namespace PCPApi.Controllers;

[Route("[controller]")]
[ApiController]
public class CommodityController : ControllerBase
{
    private readonly IRepository<Commodity> _repository;

    public CommodityController(IRepository<Commodity> repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Commodity>> Get()
    {
        var commodities = _repository.GetAll();

        if (commodities is null)
            return NoContent();

        return Ok(commodities);
    }

    [HttpGet("{id:int}")]
    public ActionResult<Commodity> Get(int id)
    {
        var commodity = _repository.Get(c => c.CommodityId == id);

        if (commodity is null)
            return NoContent();

        return Ok(commodity);
    }

    [HttpGet("bycompany/{companyid:int}")]
    public ActionResult<IEnumerable<Commodity>> GetByCompany(int companyid)
    {
        var commodities = _repository.GetAllByCompany(c => c.CompanyId == companyid);

        if (commodities is null)
            return NoContent();

        return Ok(commodities);
    }

    [HttpPost]
    public ActionResult Post(Commodity commodity)
    {
        if (commodity is null)
            return BadRequest();

        _repository.Create(commodity);

        return Created();
    }

    [HttpDelete("{id:int}")]
    public ActionResult Delete(int id)
    {
        var commodity = _repository.Get(c => c.CommodityId == id);

        if (commodity is null)
            return BadRequest();

        _repository.Delete(commodity);

        return Ok();
    }
}
