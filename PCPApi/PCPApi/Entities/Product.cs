namespace PCPApi.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("products")]
public class Product
{
    [Key]
    [Column("productId")]
    public int ProductId { get; set; }

    [Column("companyId")]
    public int CompanyId { get; set; }

    [Column("pricingId")]
    public int PricingId { get; set; }

    [MaxLength(255)]
    [Column("productsName")]
    public string ProductsName { get; set; }

    [Column("additionalPricing", TypeName = "numeric(10,2)")]
    public decimal AdditionalPricing { get; set; }

    [Column("additionalProduct", TypeName = "numeric(10,2)")]
    public decimal AdditionalProduct { get; set; }

    [Column("additionalProductValue", TypeName = "numeric(10,2)")]
    public decimal AdditionalProductValue { get; set; }

    [Column("totalPricingCost", TypeName = "numeric(10,2)")]
    public decimal TotalPricingCost { get; set; }

    [Column("totalCost", TypeName = "numeric(10,2)")]
    public decimal TotalCost { get; set; }

    [Column("profit", TypeName = "numeric(10,2)")]
    public decimal Profit { get; set; }

    [Column("additionalHoursWorked")]
    public TimeSpan AdditionalHoursWorked { get; set; }

    [Column("additionalPricingHoursWorked")]
    public TimeSpan AdditionalPricingHoursWorked { get; set; }

    [Column("salary", TypeName = "numeric(10,2)")]
    public decimal Salary { get; set; }

    [Column("additionalPercentage")]
    public int AdditionalPercentage { get; set; }

    [Column("totalPrice", TypeName = "numeric(10,2)")]
    public decimal TotalPrice { get; set; }

    [MaxLength(255)]
    [Column("urlImage")]
    public string UrlImage { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; }

    [ForeignKey("CompanyId")]
    public Company Company { get; set; }

    [ForeignKey("PricingId")]
    public Pricing Pricing { get; set; }
}
