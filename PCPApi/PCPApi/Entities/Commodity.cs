namespace PCPApi.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("commodities")]
public class Commodity
{
    [Key]
    [Column("commoditiId")]
    public int CommodityId { get; set; }

    [Column("unitId")]
    public int UnitId { get; set; }

    [Column("companyId")]
    public int CompanyId { get; set; }

    [MaxLength(255)]
    [Column("brand")]
    public string Brand { get; set; }

    [MaxLength(255)]
    [Column("commoditiesName")]
    public string CommodityName { get; set; }

    [MaxLength(255)]
    [Column("price")]
    public string Price { get; set; }

    [Column("quantity")]
    public int Quantity { get; set; }

    [Column("stock")]
    public int Stock { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; }

    [ForeignKey("UnitId")]
    public Unit Unit { get; set; }

    [ForeignKey("CompanyId")]
    public Company Company { get; set; }
}
