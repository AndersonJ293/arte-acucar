namespace PCPApi.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("pricings")]
public class Pricing
{
    [Key]
    [Column("pricingId")]
    public int PricingId { get; set; }

    [Column("commoditiId")]
    public int CommodityId { get; set; }

    [Column("companyId")]
    public int CompanyId { get; set; }

    [MaxLength(255)]
    [Column("brand")]
    public string Brand { get; set; }

    [MaxLength(255)]
    [Column("pricingsName")]
    public string PricingsName { get; set; }

    [Column("price", TypeName = "numeric(10,2)")]
    public decimal Price { get; set; }

    [Column("quantity")]
    public int Quantity { get; set; }

    [Column("stock")]
    public int Stock { get; set; }

    [Column("additional", TypeName = "numeric(10,5)")]
    public decimal Additional { get; set; }

    [Column("costOfInputs", TypeName = "numeric(10,5)")]
    public decimal CostOfInputs { get; set; }

    [Column("totalCost", TypeName = "numeric(10,5)")]
    public decimal TotalCost { get; set; }

    [Column("workedHours")]
    public TimeSpan WorkedHours { get; set; }

    [Column("profit", TypeName = "numeric(10,2)")]
    public decimal Profit { get; set; }

    [Column("additionalPercentage")]
    public int AdditionalPercentage { get; set; }

    [Column("profitPercentage")]
    public int ProfitPercentage { get; set; }

    [Column("totalPrice", TypeName = "numeric(10,5)")]
    public decimal TotalPrice { get; set; }

    [Column("salary", TypeName = "numeric(10,2)")]
    public decimal Salary { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; }

    [ForeignKey("CommodityId")]
    public Commodity Commodity { get; set; }

    [ForeignKey("CompanyId")]
    public Company Company { get; set; }
}
