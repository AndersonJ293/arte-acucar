namespace PCPApi.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("pricings")]
public class Pricing
{
    [Key]
    [Column("pricingid")]
    public int PricingId { get; set; }

    [Column("commoditieid")]
    [Required]
    public int CommodityId { get; set; }

    [Column("companyid")]
    [Required]
    public int CompanyId { get; set; }

    [Column("pricingName")]
    [MaxLength(255)]
    public string? PricingName { get; set; }

    [Column("quantity", TypeName = "numeric(18,2)")]
    public decimal Quantity { get; set; }

    [Column("additional", TypeName = "numeric(18,2)")]
    public decimal Additional { get; set; }

    [Column("costofcommodities", TypeName = "numeric(18,2)")]
    public decimal CostOfCommodities { get; set; }

    [Column("totalcost", TypeName = "numeric(18,2)")]
    public decimal TotalCost { get; set; }

    [Column("workedhours")]
    [MaxLength(10)]
    public string WorkedHours { get; set; } = "00:00";

    [Column("profit", TypeName = "numeric(18,2)")]
    public decimal Profit { get; set; }

    [Column("additionalPercentage", TypeName = "numeric(18,2)")]
    public decimal AdditionalPercentage { get; set; }

    [Column("profitPercentage", TypeName = "numeric(18,2)")]
    public decimal ProfitPercentage { get; set; }

    [Column("totalPrice", TypeName = "numeric(18,2)")]
    public decimal TotalPrice { get; set; }

    [Column("salary", TypeName = "numeric(18,2)")]
    public decimal Salary { get; set; }

    [Column("created_at", TypeName = "timestamp")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at", TypeName = "timestamp")]
    public DateTime UpdatedAt { get; set; }

    [ForeignKey("commoditieid")]
    public Commodity Commodity { get; set; }

    [ForeignKey("companyid")]
    public Company Company { get; set; }
}
