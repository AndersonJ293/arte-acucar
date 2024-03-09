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
    public int CompanyId { get; set; }

    [Column("additionalBudget", TypeName = "numeric(10,2)")]
    public decimal AdditionalBudget { get; set; }

    [Column("notes")]
    public string Notes { get; set; }

    [Column("totalProductCost", TypeName = "numeric(10,2)")]
    public decimal TotalProductCost { get; set; }

    [Column("deliveryDate")]
    public DateTime DeliveryDate { get; set; }

    [Column("budgetDate")]
    public DateTime BudgetDate { get; set; }

    [Column("hoursWorked")]
    public string HoursWorked { get; set; }

    [Column("childAge")]
    public string ChildAge { get; set; }

    [Column("profit", TypeName = "numeric(10,2)")]
    public decimal Profit { get; set; }

    [Column("childName")]
    public string ChildName { get; set; }

    [Column("additionalPercentage")]
    public int AdditionalPercentage { get; set; }

    [Column("totalPrice", TypeName = "numeric(10,2)")]
    public decimal TotalPrice { get; set; }

    [Column("phone")]
    public string Phone { get; set; }

    [Column("theme")]
    public string Theme { get; set; }

    [Column("imageURL")]
    public string ImageURL { get; set; }

    [Column("additionalValue", TypeName = "numeric(10,2)")]
    public decimal AdditionalValue { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; }

    public Company Company { get; set; }
    public List<BudgetAddress> Addresses { get; set; }
    public List<BudgetItem> Items { get; set; }
}
