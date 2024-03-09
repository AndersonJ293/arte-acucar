namespace PCPApi.Entities;

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("budget")]
public class Budget
{
    [Key]
    [Column("budgetId")]
    public int BudgetId { get; set; }

    [Column("companyId")]
    [Required]
    public int CompanyId { get; set; }

    [Column("additionalBudget", TypeName = "numeric(18,2)")]
    public decimal AdditionalBudget { get; set; }

    [Column("notes")]
    [MaxLength(1000)]
    public string? Notes { get; set; }

    [Column("totalProductCost", TypeName = "numeric(18,2)")]
    public decimal TotalProductCost { get; set; }

    [Column("deliveryDate", TypeName = "timestamp")]
    [Required]
    public DateTime DeliveryDate { get; set; }

    [Column("budgetDate", TypeName = "timestamp")]
    [Required]
    public DateTime BudgetDate { get; set; }

    [Column("hoursWorked")]
    [MaxLength(10)]
    public string? HoursWorked { get; set; }

    [Column("childAge")]
    public int ChildAge { get; set; }

    [Column("profit", TypeName = "numeric(18,2)")]
    public decimal Profit { get; set; }

    [Column("childName")]
    [MaxLength(255)]
    public string? ChildName { get; set; }

    [Column("budgetName")]
    [Required]
    [MaxLength(120)]
    public string BudgetName { get; set; }

    [Column("additionalPercentage")]
    public int AdditionalPercentage { get; set; }

    [Column("totalPrice", TypeName = "numeric(18,2)")]
    public decimal TotalPrice { get; set; }

    [Column("salary", TypeName = "numeric(18,2)")]
    public decimal salary { get; set; }

    [Column("phone")]
    [MaxLength(255)]
    public string? Phone { get; set; }

    [Column("theme")]
    [MaxLength(255)]
    public string? Theme { get; set; }

    [Column("additionalValue", TypeName = "numeric(10,2)")]
    public decimal AdditionalValue { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; }

    public Company Company { get; set; }
    public BudgetAddress? Address { get; set; }
    public List<Product> Products { get; set; }
    public List<BudgetImage>? BudgetImages { get; set; }
}
