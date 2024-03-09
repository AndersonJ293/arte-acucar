namespace PCPApi.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("commodities")]
public class Commodity
{
    [Key]
    [Column("commoditied")]
    public int CommodityId { get; set; }

    [Column("unitid")]
    [Required]
    public int UnitId { get; set; }

    [Column("companyid")]
    [Required]
    public int CompanyId { get; set; }

    [MaxLength(255)]
    [Column("brand")]
    public string Brand { get; set; }

    [MaxLength(255)]
    [Column("commoditiename")]
    [Required]
    public string CommodityName { get; set; }

    [Column("price", TypeName = "numeric(18,2)")]
    [Required]
    public decimal Price { get; set; }

    [Column("quantity", TypeName = "numeric(18,5)")]
    [Required]
    public int Quantity { get; set; }

    [Column("stock", TypeName = "numeric(18,2)")]
    public int Stock { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; }

    [ForeignKey("unitid")]
    public Unit Unit { get; set; }

    [ForeignKey("companyid")]
    public Company Company { get; set; }
}
