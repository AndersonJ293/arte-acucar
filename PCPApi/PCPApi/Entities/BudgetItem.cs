namespace PCPApi.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("budget_item")]
public class BudgetItem
{
    [Key]
    [Column("itemId")]
    public int ItemId { get; set; }

    [Column("budgetId")]
    public int BudgetId { get; set; }

    [Column("itemName")]
    public string ItemName { get; set; }

    [Column("quantity")]
    public int Quantity { get; set; }

    [Column("price", TypeName = "numeric(10,2)")]
    public decimal Price { get; set; }

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

    [Column("workedHours")]
    public string WorkedHours { get; set; }

    [Column("additionalWorkedHours")]
    public string AdditionalWorkedHours { get; set; }

    [Column("pricingWorkedHours")]
    public string PricingWorkedHours { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; }

    public Budget Budget { get; set; }
}
