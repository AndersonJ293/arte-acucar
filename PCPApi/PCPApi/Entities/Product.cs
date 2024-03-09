namespace PCPApi.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("products")]
public class Product
{
    [Key]
    [Column("productid")]
    public int ProductId { get; set; }

    [Column("companyid")]
    [Required]
    public int CompanyId { get; set; }

    [Column("productname")]
    [MaxLength(255)]
    [Required]
    public string ProductName { get; set; }

    [Column("additionalpricing", TypeName = "numeric(18,2)")]
    public decimal AdditionalPricing { get; set; }

    [Column("additionalproduct", TypeName = "numeric(18,2)")]
    public decimal AdditionalProduct { get; set; }

    [Column("additionalproductvalue", TypeName = "numeric(18,2)")]
    public decimal AdditionalProductValue { get; set; }

    [Column("totalpricingcost", TypeName = "numeric(18,2)")]
    public decimal TotalPricingCost { get; set; }

    [Column("totalcost", TypeName = "numeric(18,2)")]
    public decimal TotalCost { get; set; }

    [Column("profit", TypeName = "numeric(18,2)")]
    public decimal Profit { get; set; }

    [Column("workedhours")]
    [MaxLength(10)]
    public string WorkedHours { get; set; } = "00:00";

    [Column("additionalhoursworked")]
    [MaxLength(10)]
    public string AdditionalHoursWorked { get; set; } = "00:00";

    [Column("additionalpricinghoursworked")]
    [MaxLength(10)]
    public string AdditionalPricingHoursWorked { get; set; } = "00:00";

    [Column("salary", TypeName = "numeric(18,2)")]
    public decimal Salary { get; set; }

    [Column("additionalPercentage", TypeName = "numeric(18,2)")]
    public decimal AdditionalPercentage { get; set; }

    [Column("totalPrice", TypeName = "numeric(18,2)")]
    public decimal TotalPrice { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; }

    [ForeignKey("CompanyId")]
    public Company Company { get; set; }

    [ForeignKey("PricingId")]
    public Pricing Pricing { get; set; }

    public List<Product>? Products { get; set; }
    public List<Pricing>? Pricings { get; set; }
    public List<ProductImage>? ProductImages { get; set; }
}
