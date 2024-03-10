using System.Text.Json.Serialization;

namespace PCPApi.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("commodities")]
public class Commodity
{
    [Key]
    [Column("commoditieid")]
    public int CommodityId { get; set; }

    // [Column("unitid")]
    // [Required]
    // public int UnitId { get; set; }
    //
    // [Column("companyid")]
    // [Required]
    // public int CompanyId { get; set; }

    [MaxLength(255)]
    [Column("brand")]
    public string? Brand { get; set; }

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

    [Column("unitid")]
    public int UnitId { get; set; }

    [ForeignKey("UnitId")]
    public virtual Unit Unit { get; set; }

    [Column("companyid")]
    [Required]
    public int CompanyId { get; set; }

    [ForeignKey("CompanyId")]
    public Company Company { get; set; } = null!;
}
